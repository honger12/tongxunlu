$(function () {
    let arr = [
        {name: '幼稚园老师' , tell:'18406585301' , py:'youzhiyuanlaoshi'},
        {name: '光头强' , tell:'18406585302' , py:'guangtouqiang'},
        {name: '慢羊羊' , tell:'18406585303' , py:'manyangyang'},
        {name: '大头' , tell:'18406585304' , py:'datou'},
        {name: '一休哥哥' , tell:'18406585305' , py:'yixiugege'},
        {name: '鲁班大师' , tell:'18406585306' , py:'lubandashi'},
        {name: '大灰狼' , tell:'18406585307' , py:'dahuilang'},
        {name: '哪吒' , tell:'18406585308' , py:'nezha'},
        {name: '皮卡丘' , tell:'18406585309' , py:'pikaqiu'},
        {name: '安琪拉大漂亮' , tell:'18406585300' , py:'anqiladapiaoliang'}
    ]
    let main = $('main');
    let aside = $('.aside');

    render(arr);

    //渲染函数-->为页面中添加内容（并定义添加的格式）
    function render(arr){
        //添加之前先清空原先main中的内容
        main.empty();
        aside.empty();

        let person = {};//保存的是首字母的对象

        //    遍历数组得到arr中的每个属性的py的首字母
        arr.forEach(ele=>{
            let firstChar = ele.py.charAt(0).toUpperCase();

            //    判断person中有无对应的对象，没有的话添加
            if(!person[firstChar]){
                person[firstChar] = [];
            }
            person[firstChar].push(ele); //[{}]的形式
            //    将person放入页面中
            let keysarr = Object.keys(person).sort(); //得到有序的首字母集合
            //    按照首字母放置在页面中-->放止内容--->模板字符串类型
            let html = '' , html1 = '';
            for(let i = 0 ; i < keysarr.length ; i++){


                //    获取keysarr中的每一个首字母的集合
                let ele = keysarr[i];

                html1 += `<li>${ele}</li>`;
                html+=`
                <section>
                    <h2>${ele}</h2>
            `
                for(let j = 0 ; j <person[ele].length ; j++){
                    //获取keysarr中的每一个元素
                    let info = person[ele][j];  //{name: '幼稚园老师' , tell:'18406585305' , py:'youzhiyuanlaoshi'}的形式
                    html+=`
                <div>
                    <a href="tel:${info.tell}">${info.name}</a>
                </div>
                `
                }
                html+=`</section>`;

            }
            main.html(html);
            aside.html(html1);
        })
    }

//    搜索事件
    let input = $('input');
    input.on('input' , function () {
    //    获取表单的值
        let val = $(this).val();
        let newarr = arr.filter(ele=>ele.name.includes(val) || ele.py.includes(val) || ele.tell.includes(val));
        render(newarr);
    })

})