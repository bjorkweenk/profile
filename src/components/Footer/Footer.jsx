import "./Footer.css"

const Footer = () => {
    return ( 
        <>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
        <footer>
<div class="footer">
<div class="row">
<ul className="meeting">
<li><a href="#"> <i class="fa fa-coffee" > <p className="coffee">Let's have cup of coffee</p> </i></a></li>
<a href="https://github.com/bjorkweenk"><i class="fa fa-github"><p className="coffee">Github</p></i></a>
<li><a href="#"> <i class="fa fa-laptop"> <p className="zoom">Let's have  Zoom meeting </p></i></a></li>
<a href="https://www.linkedin.com/in/wuqingguibjork/"><i class="fa fa-linkedin"></i><p className="coffee">Linkedin</p></a>
</ul>
</div>

<div class="rights">
© 2022 - All rights reserved || Designed By: Bjork Weenk 
</div>
</div>
</footer>


        </>
     );
}
 
export default Footer;