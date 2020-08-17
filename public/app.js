var list = document.getElementById('list');

//Get data when data is enterd
firebase.database().ref('TodoApp').on('child_added', function (data) {
    var input = document.getElementById('todo_Item');
    var li = document.createElement('li');
    li.setAttribute('class', 'li')
    li.setAttribute('id', data.val().id)
    

    var text = document.createTextNode(data.val().text)
    li.appendChild(text)

    //btns   
    var div = document.createElement('div')
    //del 
    var delimg = document.createElement('img')
    delimg.setAttribute('class', 'icons')
    delimg.src = 'http://docs.qgis.org/2.14/en/_images/mActionDeleteSelected.png';
    delimg.setAttribute('onclick', 'deleteitem(this)')
   
    div.appendChild(delimg);

    //edi
    var editimg = document.createElement('img');
    editimg.setAttribute('class', 'icons')
    editimg.src = 'http://www.mapcentia.com/images/icons/frontpage/edit.png'
    editimg.setAttribute('onclick', 'edititem(this)')
    div.appendChild(editimg)

    li.appendChild(div)
    console.log(li)
    list.appendChild(li)
    // input.value = ''
})


function Add_item() {

    var input = document.getElementById('todo_Item');
    var database = firebase.database().ref('TodoApp');
    if (input.value === '') {
        return
    }
    var key = database.push().key;
    var data = {
        id: key,
        text: input.value
    };
    database.child(key).set(data);
    input.value = ''
}

function Delete_item() {
    //for Database
    firebase.database().ref('TodoApp').remove();
    //forDOM
    list.innerHTML = '';
}

function deleteitem(e) {
    let key = e.parentNode.parentNode.id;
    console.log(key)
    //for Database
    firebase.database().ref('TodoApp').child(key).remove();
    //forDOM
    e.parentNode.parentNode.remove();
}
function edititem(e) {
    //agr TextContent krtta to btn bhi ht jate
    var val = prompt('Enter Updated Value', e.parentNode.parentNode.firstChild.nodeValue)
    e.parentNode.parentNode.firstChild.nodeValue = val;
    
    let key=e.parentNode.parentNode.id;
    var editdata={
        id:key,
        text:val
    }
    firebase.database().ref('TodoApp').child(key).set(editdata);
}