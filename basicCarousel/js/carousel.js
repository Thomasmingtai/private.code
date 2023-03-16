function backPage(){
                let index=parseInt(document.getElementById("index").value);
                let frame_number = document.getElementsByClassName('carousel__slide').length;
                
                index-=1;
                if(index < 0)
                    index+=frame_number;
                slidePage(index);
}
                
function nextPage(){
                let index=parseInt(document.getElementById("index").value);
                let frame_number = document.getElementsByClassName('carousel__slide').length;
                
                index+=1;
                if(index == frame_number)
                    index-=frame_number;
                slidePage(index);
}
function slidePage(index){
                document.getElementById("index").value=index;
                let frame_number = document.getElementsByClassName('carousel__slide').length;
                let boxId="#carousel__slide"+index;
                
                location.href=url+boxId;
}


