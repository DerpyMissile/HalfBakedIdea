using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;
using UnityEngine.EventSystems;
using UnityEngine.SceneManagement;

public class mainMenu : MonoBehaviour, IPointerClickHandler
{
    public Sprite[] images; // Replace this with an array of your image frames
    public GameObject theVoid;
    public float frameRate = 1.0f; // The time between frames in seconds
    public bool loop = true; // Whether to loop the animation or play it once

    private Image image;
    private int currentFrame = 0;
    private float timer = 0f;
    private bool isPlaying = false;

    void Start()
    {
        //image.GetComponent<Button>().onClick.AddListener(Task2OnClick);
        image = GetComponent<Image>();
        image.sprite = images[0];
        PlayAnimation();
        //theVoid.GetComponent<SpriteRenderer>().material.color = new Color(1.0f, 1.0f, 1.0f, 1.0f);
        //theVoid.SetActive(false);
    }

    void Update()
    {
        if (isPlaying)
        {
            timer += Time.deltaTime;
            if (timer >= frameRate)
            {
                timer = 0f;
                currentFrame++;
                if (currentFrame >= images.Length)
                {
                    if (loop)
                    {
                        currentFrame = 0;
                    }
                    else
                    {
                        isPlaying = false;
                    }
                }
                image.sprite = images[currentFrame];
            }
        }
    }

    public void PlayAnimation()
    {
        currentFrame = 0;
        timer = 0f;
        isPlaying = true;
    }

    public void OnPointerClick(PointerEventData eventData)
    {
        if (eventData.button == PointerEventData.InputButton.Left)
        {
            Debug.Log("Image clicked!");
            StartCoroutine(LoadYourAsyncScene());

        }
    }

    IEnumerator LoadYourAsyncScene()
    {
        // The Application loads the Scene in the background as the current Scene runs.
        // This is particularly good for creating loading screens.
        // You could also load the Scene by using sceneBuildIndex. In this case Scene2 has
        // a sceneBuildIndex of 1 as shown in Build Settings.

        AsyncOperation asyncLoad = SceneManager.LoadSceneAsync("ActualGame");

        // Wait until the asynchronous scene fully loads
        while (!asyncLoad.isDone)
        {
            yield return null;
        }
    }

}
