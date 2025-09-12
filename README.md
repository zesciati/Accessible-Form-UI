### Link
Solution link:
1. [round progress bar](https://codepen.io/Edupin/pen/xxoJVNm)
2. [ Confirm Password Validation using JavaScript & HTML](https://youtu.be/RnSMTNW6ryg)

### NOTE
Backend link: localhost:8030 atau https://directus-for-all.zakyabiyyu.com/ (selfhost docker / cloudflare tunnel).

Nama file nya Directus-for-all.
<details>
    <summary>Proses pembuatan backend dengan directus</summary>
   1. Membuat collection bernama ![form_Accessible_UI](img\form_Accessible_UI.png) dengan ![fields](img\fields-collection.png). 
   2. Setelah dibuat collection nya lalu membuat access policies dengan nama ![form accessible ui policy](img\access-policies.png).
   3. form accessible ui policy di assigned ke user roles bernama ![admin form accessible ui](img\admin-form-accessible-ui.png).
   4. admin form accessible ui akan di assigned ke user directory dengan user bernama lucas andrade untuk memiliki kemampuan admin.
   5. User lucas andrade membuat static token untuk API yang bisa diakses dengan postman.
</details>


<details>
    <summary>e.preventDefault()</summary>
    Menghentikan sementara atau menskip default behaviour. Contohnya submit button memiliki default behaviour untuk mensubmit button ke server Tapi jika ada fitur validasinya maka akan ditahan default behaviour submit button untuk menyelesaikan validasinya terlebih dahulu.
    https://stackoverflow.com/questions/11921210/how-exactly-does-event-preventdefault-affect-the-dom
</details>