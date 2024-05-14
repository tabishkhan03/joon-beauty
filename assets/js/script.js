
var splide = new Splide( '.splide', {
    type   : 'loop',
    autoplay:true,
    padding: '20rem',
    gap:"20px",
    arrows:false,
    breakpoints: {
    992:{
        padding:"0rem",
     
    },
    },
  } );
  
  splide.mount();

  let menu_btn=document.querySelector("#menu-btn")
  menu_btn.addEventListener("click",()=>{

    let menu=document.getElementById("sidem");
    console.log(menu)
    menu.classList.add("side-menu-open")
    
  })


    document.querySelector('#close-btn').addEventListener('click',()=>{
        document.getElementById("sidem").classList.remove('side-menu-open')
    })

    var splide2 = new Splide( '#featured-splide', {
      type   : 'loop',
      perPage:3,
      padding:'150px',
      gap:'30px',
      pagination:false,
      breakpoints:{
        1200:{
          perPage:2,
          gap:'20px',
        },
        992:{
          perPage:2,
          padding:'5rem',
        },
        768:{
          perPage:1,
          padding:'10rem',
          gap:'10px'
        },
        576:{
          padding:0,

        },
      },
      
    } );
    
    splide2.mount();


    var splide3 = new Splide( '#top-seller-splide', {
      scrollbar: {
        el: '.swiper-scrollbar',
      },
      padding: '12rem',
      pagination:false,
      arrows:false,
      gap:"20px",
      breakpoints:{
        992:{
          padding:'0rem',
        },
      },
    } );
    
    splide3.mount();

    document.querySelector("#prev-btn").addEventListener('click', () => {
      splide3.go('-1');  
    })
    
    document.querySelector("#next-btn").addEventListener('click', () => {
      splide3.go('+1');
    });
    var a=splide3.index;
    console.log(a)
  


      splide3.on( 'move', function () {
        if (splide3.index==0) {
          document.querySelector(".left").classList.add("none")
        } 
        else {
      
          document.querySelector(".left").classList.remove("none")
        }  

        if (splide3.index==splide3.length-1) {
          document.querySelector(".right").classList.add("none")
        } 
        else {
      
          document.querySelector(".right").classList.remove("none")
        }   
      } );



    var splide4 = new Splide( '#blog-slider', {
      type   : 'loop',
      perPage:3,
      gap:'1rem',
      arrows:false,
      pagination:false,
      autoplay:true,
      breakpoints:{
        992:{
          perPage:2,
        },
        768:{
          perPage:1,
        },
      },
    } );
    
    splide4.mount();

    var splide5 = new Splide( '#face-slider1', {
      type   : 'loop',
      perPage:5,
      // perMove:1,
      gap:'1rem',
      padding:'100px',
      arrows:false,
      pagination:false,
      drag: 'free',
      // autoplay:true,
      autoScroll: {
        speed: 1,
      },
      breakpoints:{
        1200:{
          perPage:4,
        },
        992:{
          perPage:3,
        },
        768:{
          padding:'50px',
          gap:'10px',
          perPage:2,
        },
        576:{
          padding:'5rem',
          gap:'20px',
          perPage:1,
        },
      
      },
    } );
    
    splide5.mount(window.splide.Extensions);

    var splide6 = new Splide( '#face-slider2', {
      type   : 'loop',
      perPage:6,
      autoplay:true,
      pagination:false,
      gap:'1rem',
      arrows:false,
      autoScroll: {
        speed: 1,
      },
      breakpoints:{
        1200:{
          perPage:5,
        },
        992:{
          perPage:4,
        },
        768:{
         
          perPage:2,
        },
        
      },
      // breakpoints:{
      // },
    } );
    
    splide6.mount(window.splide.Extensions);