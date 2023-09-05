var head={
    setcolor:function(color){
        var alist=document.querySelectorAll('a');
        var i=0;
        while(i<alist.length){
            alist[i].style.color=color;
            i=i+1;
        }
    }
}
var body={
    setbackgroundcolor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    },
    setcolor:function(color){
        document.querySelector('body').style.color=color;
    }
}
function nightdayhandler(self){
    var target=document.querySelector('body');
    if(self.value==='Night'){
        body.setbackgroundcolor('black');
        body.setcolor('white');
        self.value='Day';

        head.setcolor('powderblue');
    } else {
        body.setbackgroundcolor('white');
        body.setcolor('black');
        self.value='Night';

        head.setcolor('blue');
    }   
}