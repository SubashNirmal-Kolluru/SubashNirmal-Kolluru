using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemy_animator : MonoBehaviour
{
    private Animator anim;

    void Awake(){ anim = GetComponent<Animator>();}
    // Start is called before the first frame update
    // void Start(){}

    public void Walk(bool walk){ anim.SetBool(Animation_Tags.PARA_WALK, walk);}
    public void Run(bool run){ anim.SetBool(Animation_Tags.PARA_RUN, run);}
    public void Attack(){ anim.SetTrigger(Animation_Tags.PARA_ATTACK);}
    public void Dead(){ anim.SetTrigger(Animation_Tags.PARA_DEAD);}
    // Update is called once per frame
    // void Update(){}
}
