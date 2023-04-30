using UnityEngine;

public class MortarMinigame : MonoBehaviour
{
    public GameObject object1; // the draggable object
    public GameObject object2; // the target object
    public int score = 0; // the player's score

    private bool isDragging = false;
    private Vector3 offset;
    private Collider2D object1Collider;
    private Collider2D object2Collider;

    void Start()
    {
        object1Collider = object1.GetComponent<Collider2D>();
        object2Collider = object2.GetComponent<Collider2D>();
    }

    void Update()
    {
        if (Input.GetMouseButtonDown(0))
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            RaycastHit2D hit = Physics2D.Raycast(mousePos, Vector2.zero);

            if (hit.collider == object1Collider)
            {
                isDragging = true;
                offset = object1.transform.position - mousePos;
            }
        }

        if (Input.GetMouseButtonUp(0))
        {
            isDragging = false;
        }

        if (isDragging)
        {
            Vector3 mousePos = Camera.main.ScreenToWorldPoint(Input.mousePosition);
            object1.transform.position = new Vector3(mousePos.x + offset.x, mousePos.y + offset.y, object1.transform.position.z);
        }
    }

    void OnTriggerEnter2D(Collider2D other)
    {
        if (other == object2Collider)
        {
            score++;
            Debug.Log("Score: " + score);
        }
    }
}
