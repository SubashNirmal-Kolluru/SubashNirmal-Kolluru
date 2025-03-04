using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class EnemyAttack : MonoBehaviour
{
    public float damage = 3f, radius = 1f;
    public LayerMask layerMask;
    // Start is called before the first frame update
    // void Start(){}

    // Update is called once per frame
    void Update(){
        Collider[] hits = Physics.OverlapSphere(transform.position, radius, layerMask);
        if(hits.Length > 0){
            hits[0].gameObject.GetComponent<Health>().Damage(damage);
            gameObject.SetActive(false);
        }
    }
}
