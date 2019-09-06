const fs=require('fs');

//console.log('fs',fs);

function testCreateRemoveDir(name,remove=true){
    console.log('creating',name);
    
    fs.mkdir(name, (err)=>{
        if(err){
            console.log('error',err);
        } else {
            console.log('directory created');
            if(remove){
                console.log('removing after 5 seconds...');
                setTimeout(()=>{
                    fs.rmdir(name, (err)=>{
                        if(err)
                            console.log('error removing directory');
                            
                    });
                },5000);
                
            }
        }
    });


}

//testCreateRemoveDir('testdir-noremove',false);
//testCreateRemoveDir('testdir-noremove',false);
testCreateRemoveDir('testdir')
