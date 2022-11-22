let project1 = `<div id="spotify" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Spotify Clone</h5>
    <div class="tags">
        <span class="chip">FLUTTER</span>
        <span class="chip">DART</span>
    </div>
    <p class="desc">This project mimics the ui of the Spotify app.</p>
    <a href="https://github.com/himanshu240601/spotify-clone" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/spotify-clone.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project2 = `<div id="ecomweb" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Online Apparels Store</h5>
    <div class="tags">
        <span class="chip">PHP</span>
        <span class="chip">MYSQL</span>
        <span class="chip">HTML</span>
        <span class="chip">CSS</span>
        <span class="chip">JAVASCRIPT</span>
    </div>
    <p class="desc">This project is a online clothing store. This website has a beautiful ui
        with lots of features.</p>
    <a href="https://github.com/himanshu240601/ecommerce-website" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/ecom.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project3 = `<div id="musicapp" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Music Player App</h5>
    <div class="tags">
        <span class="chip">JAVA</span>
        <span class="chip">ANDROID</span>
        <span class="chip">XML</span>
    </div>
    <p class="desc">This project is a online clothing store. This website has a beautiful ui
        with lots of features.</p>
    <a href="https://github.com/himanshu240601/music-app-java" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/music.png" class="w-100 p_img" alt="">
</div>
</div>`;

let project4 = `<div id="healthapp" class="row align-items-center text-end">
<div class="col-md-6 project_desc">
    <h5 class="project_title">Health Application</h5>
    <div class="tags">
        <span class="chip">JAVA</span>
        <span class="chip">ANDROID</span>
        <span class="chip">MYSQL</span>
        <span class="chip">PHP</span>
        <span class="chip">JSON</span>
    </div>
    <p class="desc">This is a health application to monitor the users daily tasks, moods and
        sleep patterns.</p>
    <a href="https://github.com/himanshu240601/" target="_blank"
        class="project-link">view project</a>
</div>
<div class="col-md-6 img_box">
    <img src="../assets/project/health.png" class="w-100 p_img" alt="">
</div>
</div>`;

let array = [project1, project2, project3, project4];
let i = -1;
function changeProject(bool){
  if(!bool){
    if(i+1<4){
      i+=1;
      document.getElementById('project_work').innerHTML = array[i];
    }
  }else{
    if(i-1>=0){
      i-=1;
      document.getElementById('project_work').innerHTML = array[i];
    }
  }
  if(i==0){
    document.getElementById('up').style.visibility = 'hidden';
  }else if(i>0){
    document.getElementById('up').style.visibility = 'visible';
  }
  if(i<3){
    document.getElementById('down').style.visibility = 'visible';
  }
  else if(i==3){
    document.getElementById('down').style.visibility = 'hidden';
  }
}
