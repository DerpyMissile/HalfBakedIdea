using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class SliderMinigame : MonoBehaviour
{
    public Image slider;
    public GameObject ingredient;
    public float minSpeed = 5f;
    public float maxSpeed = 10f;
    public float spawnInterval = 2f;
    public int scorePerIngredient = 10;
    public Text scoreText;
    
    private float speed;
    private int score;
    private bool isGameOver;

    void Start()
    {
        score = 0;
        isGameOver = false;
        StartCoroutine(SpawnIngredient());
    }

    void Update()
    {
        if (Input.GetKeyDown(KeyCode.Space) && !isGameOver)
        {
            float sliderPosition = slider.fillAmount;
            float ingredientPosition = ingredient.transform.position.x;
            float distance = Mathf.Abs(sliderPosition - ingredientPosition);

            if (distance < 0.1f)
            {
                score += scorePerIngredient;
                scoreText.text = "Score: " + score.ToString();
            }
            else
            {
                GameOver();
            }
        }
    }

    IEnumerator SpawnIngredient()
    {
        while (!isGameOver)
        {
            float spawnPosition = Random.Range(0f, 1f);
            Vector3 spawnPositionVector = new Vector3(spawnPosition, 1f, 0f);
            Instantiate(ingredient, spawnPositionVector, Quaternion.identity);

            speed = Random.Range(minSpeed, maxSpeed);
            yield return new WaitForSeconds(spawnInterval);
        }
    }

    void GameOver()
    {
        isGameOver = true;
        StopAllCoroutines();
        Debug.Log("Game Over!");
    }
}
