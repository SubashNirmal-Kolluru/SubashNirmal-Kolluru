using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Soldier_Movement : MonoBehaviour
{
    public Animator anim;
    public float ValX, ValY;
    // Start is called before the first frame update
    void Start()
    {
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update()
    {
        ValX = Input.GetAxis("Horizontal");
        anim.SetFloat("ValX", ValX);
        ValY = Input.GetAxis("Vertical");
        anim.SetFloat("ValY", ValY);
    }
}
