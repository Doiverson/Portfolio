
const link = document.querySelectorAll(".work-ttl ")
const linkArray = Array.from(link);

const img = document.querySelectorAll(".work img")
const imgArray = Array.from(img);


const scaleImg = (index) => {
    imgArray.map((img, i) => {
        if(index === i){
            img.classList.add("scale");
        }
    })
}

const defaultImg = (index) => {
    imgArray.map((img, i) => {
        if(index === i){
            img.classList.remove("scale");
        }
    })
}


linkArray.map((a) => {

    let imgIndex = linkArray.indexOf(a);

    a.addEventListener("mouseover", scaleImg.bind(null, imgIndex) );

    a.addEventListener("mouseout", defaultImg.bind(null, imgIndex) );
})
