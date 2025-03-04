using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class LinearMovement : MonoBehaviour
{
    private CharacterController character_Controller;
    private Vector3 move_Direction;

    public float speed = 5f;
    private float gravity = 20f;
    public float jump_Force = 10f;
    private float vertical_Velocity;

    void Awake(){ character_Controller = GetComponent<CharacterController>();}
    // Start is called before the first frame update
    // void Start(){}
    // Update is called once per frame
    void Update(){ MoveThePlayer();}

    void MoveThePlayer(){
            move_Direction = new Vector3(Input.GetAxis(Axis.HORIZONTAL), 0f, Input.GetAxis(Axis.VERTICAL));
            move_Direction = transform.TransformDirection(move_Direction);
            move_Direction *= speed * Time.deltaTime;
            ApplyGravity();
            character_Controller.Move(move_Direction); 
    }

    void ApplyGravity(){
        vertical_Velocity -= gravity * Time.deltaTime;
        if(character_Controller.isGrounded) {
            if(character_Controller.isGrounded && Input.GetKeyDown(KeyCode.Space)) vertical_Velocity = jump_Force;
        }
        move_Direction.y = vertical_Velocity * Time.deltaTime;
    }
}
