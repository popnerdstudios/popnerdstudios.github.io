
//BACKGROUND
    var background = new Image();
    var backgroundname="Background1.png";
    background.src=backgroundname;
   
   //OUTLINE
    var outline = new Image();
    var outlinenum=Math.floor(Math.random()*1)+1;
    var outlinename="Outline" + outlinenum + ".png";
    outline.src=outlinename;

    //SKIN
    var skin = new Image();
    var skinnum=Math.floor(Math.random()*3)+1;
    var skinname="Skin" + skinnum + ".png";
    skin.src=skinname;

    //EYES
    var eye = new Image();
    var eyenum=Math.floor(Math.random()*6)+1;
    var eyename="Eyes" + eyenum + ".png";
    eye.src=eyename;

    //SHIRT
    var shirt = new Image();
    var shirtnum=Math.floor(Math.random()*11)+1;
    var shirtname="Shirt" + shirtnum + ".png";
    shirt.src=shirtname;

    //PANTS
    var pants = new Image();
    var pantsnum=Math.floor(Math.random()*4)+1;
    var pantsname="Pants" + pantsnum + ".png";
    pants.src=pantsname;

    //BEARD
    var beard = new Image();
    var beardnum=Math.floor(Math.random()*6)+1;
    var beardname="Beard" + beardnum + ".png";
    beard.src=beardname;

    //HAT
    var hat = new Image();
    var hatnum=Math.floor(Math.random()*16)+1;
    var hatname="Hat" + hatnum + ".png";
    hat.src=hatname;

    
    background.onload=function()
    {
        buildgnome();
    }

    outline.onload=function()
    {
        buildgnome();
    }

    skin.onload=function()
    {
        buildgnome();
    }

    eye.onload=function()
    {
        buildgnome();
    }

    shirt.onload=function()
    {
        buildgnome();
    }

    pants.onload=function()
    {
        buildgnome();
    }

    beard.onload=function()
    {
        buildgnome();
    }

    hat.onload=function()
    {
        buildgnome();
    }


    function buildgnome()
    {
        var canvas=document.querySelector('canvas');
        var ctx = canvas.getContext('2d');
        canvas.width=330;
        canvas.height=410;

       // ctx.drawImage(background,0,0,330,410);
        ctx.drawImage(outline,0,0,330,410);
        ctx.drawImage(skin,0,0,330,410);
        ctx.drawImage(eye,0,0,330,410);
        ctx.drawImage(shirt,0,0,330,410);
        ctx.drawImage(pants,0,0,330,410);
        ctx.drawImage(beard,0,0,330,410);
        ctx.drawImage(hat,0,0,330,410);
    }

    function onSave(){
        const gcanvas=document.querySelector('canvas');
        gcanvas.toBlob((blob) => {
            const timestamp = Date.now().toString();
            const a = document.createElement('a');
            document.body.append(a);
            a.download = 'gnome-${timestamp}.png';
            a.href = URL.createObjectURL(blob);
            a.click();
            a.remove();
        })
    }

    window.onload=function(){
        document.getElementById('gsave').addEventListener('click', onSave);
      }

    

    
    
