using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class MouseLook : MonoBehaviour{
    [SerializeField] private Transform playerRoot, lookRoot;
    [SerializeField] private bool invert, can_Unlock = true;
    [SerializeField] private float sensitivity = 5f;
    [SerializeField] private int smooth_steps = 10;
    [SerializeField] private float smooth_weight = 0.4f, roll_angle = 10f, roll_speed = 3f;
    [SerializeField] private Vector2 default_look_Limits = new Vector2(-70f, 80f);

    private Vector2 look_angles, curr_m_look, smooth_move;
    private float curr_roll_angle;
    private int last_look_frame;

    // Start is called before the first frame update
    void Start(){ Cursor.lockState = CursorLockMode.Locked;}

    // Update is called once per frame
    void Update(){
        LockandUnlockCursor();
        if(Cursor.lockState == CursorLockMode.Locked) LookAround();
    }

    void LockandUnlockCursor(){
        if(Input.GetKeyDown(KeyCode.Escape)){
            if(Cursor.lockState == CursorLockMode.Locked) Cursor.lockState = CursorLockMode.None;
            else {
                Cursor.lockState = CursorLockMode.Locked;
                Cursor.visible = false;
            }
        }
    }

    void LookAround(){
        curr_m_look = new Vector2(Input.GetAxis(MouseAxis.MOUSE_Y), Input.GetAxis(MouseAxis.MOUSE_X));
        look_angles.x += curr_m_look.x * sensitivity * (invert ? 1f : -1f);
        look_angles.y += curr_m_look.y * sensitivity;

        look_angles.x = Mathf.Clamp(look_angles.x, default_look_Limits.x, default_look_Limits.y);
        curr_roll_angle = Mathf.Lerp(curr_roll_angle, Input.GetAxisRaw(MouseAxis.MOUSE_X) * roll_angle, Time.deltaTime * roll_speed);
        // Get axis raw - only integer values

        lookRoot.localRotation = Quaternion.Euler(look_angles.x, 0f, curr_roll_angle);
        playerRoot.localRotation = Quaternion.Euler(0f, look_angles.y, 0f);
    }
}
