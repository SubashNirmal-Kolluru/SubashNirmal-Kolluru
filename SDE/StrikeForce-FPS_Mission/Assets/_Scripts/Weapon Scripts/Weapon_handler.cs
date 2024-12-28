using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public enum Aim{NONE, AUTO_AIM, AIM}
public enum FireType{SINGLE, MULTIPLE}
public enum BulletType{BULLET, NONE}

public class Weapon_handler : MonoBehaviour
{
    private Animator anim;
    public Aim weapon_Aim;
    [SerializeField] private GameObject muzzleFlash;
    [SerializeField] private AudioSource shoot_sound, reload_sound;
    public FireType fire_type;
    public BulletType bullet_type;
    public GameObject attack_point;

    void Awake(){
        anim = GetComponent<Animator>();
    }

    public void ShootAnimation(){
        anim.SetTrigger(Animation_Tags.PARA_SHOOT);
    }

    public void Aim(bool aim){
        anim.SetBool(Animation_Tags.PARA_AIM, aim);
    }

    void Turnon_Muzzleflash(){muzzleFlash.SetActive(true);}
    void Turnoff_Muzzleflash(){muzzleFlash.SetActive(false);}
    void Play_Shootsound(){shoot_sound.Play();}
    void Play_Reloadsound(){reload_sound.Play();}
    void Turnon_AttackPoint(){attack_point.SetActive(true);}
    void Turnoff_AttackPoint(){if(attack_point.activeInHierarchy) attack_point.SetActive(false);}

    // Start is called before the first frame update
    // void Start(){}
    // Update is called once per frame
    // void Update(){}
}
