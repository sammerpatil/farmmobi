<?php 
if(isset($_POST['submit'])){
        foreach($_FILES['doc']['name'] as $key=>$val){
                move_uploaded_file($_FILES['doc']['tmp_name'][$key],'media/'.$val);
        }
}
?>




<h3>File upload in PHP</h3>
<form  method="POST" enctype="multipart/form-data">
        <input type="file" name="doc[]" multiple/>
        <input type="submit" name="submit" >
</form>
