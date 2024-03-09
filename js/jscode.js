function sweet(){
  Swal.fire({
    html: `
    <img src="pic/sweet alert/Group 1000005398.png" alt="">,
    <br>
    <br>
    <h4>تم تسجيل دخولك بنجاح</h4>
    `,
    showConfirmButton: false,
    timer : 3500,
    width : 250,
  });
}

function sweet2(){
  swal.fire(
    {
      icon:"success",
      title : "تم اضافة العرض بنجاح",
      text : "لقد تم اضافة العرض الخاص بك بنجاح .. يمكنك بكل سهولة معرفة تفاصيل العرض و تعديل بياناته بكل سهولة",
      timer : 3500 ,
      width : 350,
      showConfirmButton: false,
    }
  );
}
