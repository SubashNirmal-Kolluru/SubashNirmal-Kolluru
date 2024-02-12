using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class WeaponAttack : MonoBehaviour
{
    Animator anim;
    // Start is called before the first frame update
    void Start(){
        anim = GetComponent<Animator>();
    }

    // Update is called once per frame
    void Update(){
        if(Input.GetButtonDown("Fire1")) anim.SetTrigger("Shoot");
        // if(Input.GetButtonUp("Fire1")) anim.ResetTrigger("Shoot");
    }
}
