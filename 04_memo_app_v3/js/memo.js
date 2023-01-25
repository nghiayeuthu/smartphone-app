"use strict";
window.addEventListener("DOMContentLoaded",
function(){
    if (typeof localStorage == "undefined") {
        window.alert("このブラウザはLocal Storage機能が実装されていません");
        return;
    } else{
        viewStorage();
        saveLocalStorage();
        delLocalStorage();
        del_row();
        allClearLocalStorage();
        selectTable();
    }
},false
);
function saveLocalStorage(){
 const save = document.getElementById("save");
 save.addEventListener("click",
function(e){
    e.preventDefault();
    const key = document.getElementById("textKey").value;
    const value = document.getElementById("textMemo").value;

    if (key=="" || value==""){
        //window.alert("Key、Memoは入力必須です。");
        Swal.fire({
	    imageUrl: 'https://image.jimcdn.com/app/cms/image/transf/dimension=520x10000:format=jpg/path/s2613d7a6f590572b/image/if6f7ee272747759a/version/1308627585/image.jpg',
  	    imageHeight: 100,	
            title:"Memo app",
            html:"Key,Memoはいずれも必須です。",
            type:"error",
            allowOutsideClick: false
        });
        return;
    }else{
        let w_msg = "LocalStorageに\n「"+ key + " " + value + "」\nを保存しますか。";
        Swal.fire({
	    imageUrl: 'https://www.shutterstock.com/image-illustration/black-hole-space-illustration-digital-600w-2201250963.jpg',
  	    imageHeight: 100,
            title:"Memo app",
            html:w_msg,
            type:"question",
            showCancelButton: true
        }).then(function(result){
        if(result.value === true){
        localStorage.setItem(key, value);
        viewStorage();
        let w_msg = "LocalStorageに" + key + " " + value + "を保存しました";
        Swal.fire({
            imageUrl: 'https://www.shutterstock.com/image-photo/spiral-galaxy-elements-this-image-600w-560802985.jpg',
  	        imageHeight: 100,
            title:"Memo app",
            html: w_msg,
            type:"success",
            allowOutsideClick: false
        });
        document.getElementById("textKey").value = "";
        document.getElementById("textMemo").value = "";
        }
    });
   }
  }
 )
}


function delLocalStorage(){
    const del = document.getElementById("del");
    
    del.addEventListener("click",
      function(e){
        e.preventDefault();
        const chkbox1 = document.getElementsByName("chkbox1");
        const table1 = document.getElementById("table1");
        let w_cnt ="0";
        w_cnt = selectCheckBox(del);

        if(w_cnt >= 1){
        //const key = document.getElementById("textKey").value;
        //const value = document.getElementById("textMemo").value;
         let w_msg = "LocalStorageから選択されている"+w_cnt+ "件を削除しますか?";
         Swal.fire({
            imageUrl: 'https://www.shutterstock.com/image-illustration/3d-effect-abstract-space-scene-600w-1821463088.jpg',
            imageHeight: 100,
            title:"Memo app",
            html:w_msg,
            type:"question",
            showCancelButton: true
        }).then(function(result){
         if(result.value === true){
             for(let i=0;i<chkbox1.length;i++){
                 if(chkbox1[i].checked){
                     localStorage.removeItem(table1.rows[i+1].cells[1].firstChild.data);
                 }
             }
    
    
    viewStorage();
    let w_msg = "LocalStorageから" +w_cnt+ "件を削除しました。";
    Swal.fire({
        imageUrl: 'https://www.shutterstock.com/image-photo/deep-space-high-definition-star-600w-573311326.jpg',
        imageHeight: 100,
        title:"Memo app",
        html:w_msg,
        type:"success",
        allowOutsideClick: false
    });
    
    document.getElementById("textKey").value = "";
    document.getElementById("textMemo").value = "";
       }
     });
    }        
  },false
);
}

function del_row() {
    const table1 = document.getElementById("table1");
    table1.addEventListener("click", (e) => {  
        if(e.target.classList.contains("trash") === true){
            let tr = e.target.parentNode.parentNode;
            tr.parentNode.deleteRow(tr.sectionRowIndex); 
        }
    }
    );
  };

  

function allClearLocalStorage(){
    const allClear = document.getElementById("allClear");
    allClear.addEventListener("click",
function(e){
    e.preventDefault();
    let w_msg = "LocalStorageのデータを全て削除します。よろしいですか。";
    Swal.fire({
        imageUrl: 'https://www.shutterstock.com/image-illustration/abstraction-background-design-mystical-light-600w-30237907.jpg',
        imageHeight: 100,
        title:"Memo app",
        html:w_msg,
        type:"question",
        showCancelButton: true
    }).then(function(result){
    if (result.value=== true){
        localStorage.clear();
        viewStorage();
        let w_msg = "LocalStorageのデータを全て削除しました";
        Swal.fire({
            imageUrl: 'https://www.shutterstock.com/image-photo/universe-filled-stars-nebula-galaxy-600w-1371779711.jpg',
            imageHeight: 100,
            title:"Memo app",
            html:w_msg,
            type:"success",
            allowOutsideClick: false
        });
        
        document.getElementById("textKey").value = "";
        document.getElementById("textMemo").value = "";
    }
});
}        )
};


function selectTable(){
    const select = document.getElementById("select");
    select.addEventListener("click",
    function(e){
        e.preventDefault();
        selectCheckBox(select);
    },false
  );
};

function selectCheckBox(mode){
    //let w_sel = "0";
    let w_cnt = 0;

    const chkbox1 = document.getElementsByName("chkbox1");
    const table1 = document.getElementById("table1");
    let w_textKey = "";
    let w_textMemo = "";

    for(let i=0; i<chkbox1.length; i++){
        if(chkbox1[i].checked){
            if(w_cnt === 0){
                
            
            w_textKey = table1.rows[i+1].cells[1].firstChild.data;
            w_textMemo = table1.rows[i+1].cells[2].firstChild.data;
            
        }
        w_cnt++
      }

    }
    document.getElementById("textKey").value = w_textKey;
    document.getElementById("textMemo").value = w_textMemo;
    if(mode === select){
    if(w_cnt === 1){
        return w_cnt;
    }
    else{
        Swal.fire({
            imageUrl: 'https://www.shutterstock.com/image-illustration/starry-outer-space-600w-479305618.jpg',
            imageHeight: 100,
            title:"Memo app",
            html:"1つ選択してください。",
            type:"error",
            allowOutsideClick:false
        });
    }
   }

   if(mode === del ){
    if(w_cnt >= 1){
        return w_cnt;
    }
    else{
        Swal.fire({
            imageUrl: 'https://www.shutterstock.com/image-photo/planets-stars-galaxies-outer-space-600w-1089702497.jpg',
            imageHeight: 100,
            title:"Memo app",
            html:"1つ以上選択してください。",
            type:"error",
            allowOutsideClick:false
        });
   }
}
};



function viewStorage(){
    const list = document.getElementById("list");
    while(list.rows[0]) list.deleteRow(0);

    for (let i=0;i<localStorage.length;i++){
        let w_key = localStorage.key(i);

        let tr = document.createElement("tr");
        let td1= document.createElement("td");
        let td2= document.createElement("td");
        let td3= document.createElement("td");
        let td4= document.createElement("td");
        list.appendChild(tr);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        td1.innerHTML = "<input name = 'chkbox1' type='checkbox'>"
        td2.innerHTML = w_key;
        td3.innerHTML = localStorage.getItem(w_key);
        td4.innerHTML = "<img src='img/trash_icon.png' class='trash'>";
        
    }
    

$("#table1").tablesorter({
    sortList:[[1,0]]
});

$("#table1").trigger("update");

}