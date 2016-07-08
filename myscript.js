$(function () {
    var data = [];
    var tr = $("table tr"); //全行を取得
    for (var i = 0, l = tr.length; i < l; i++) {
        var cells = tr.eq(i).children(); //1行目から順にth、td問わず列を取得
        for (var j = 0, m = cells.length; j < m; j++) {
            if (typeof data[i] == "undefined")
                data[i] = [];
            data[i][j] = cells.eq(j).text(); //i行目j列の文字列を取得
        }
    }

    var candidates = new Array();

    for (var i = 1, l = data.length; i < l; i++) {

        var my_point = parseInt(data[i][3]) + (parseInt(data[i][4]) * 0.001) + parseInt(data[i][5]) + parseInt(data[i][6]) + (parseInt(data[i][7]) * 0.001) + parseInt(data[i][8]);

        var obj = {
            name: data[i][0],
            party: data[i][2],
            my_pint: my_point
        };
        candidates.push(obj);
    }

    candidates.sort(function (a, b) {
        if (a.my_pint < b.my_pint) return 1;
        if (a.my_pint > b.my_pint) return -1;
        return 0;
    });
    
    var party0 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "自由民主党") party0.push(candidates[i]);
    
    var party1 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "民主党") party1.push(candidates[i]);
    
    var party2 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "日本共産党") party2.push(candidates[i]);
    
    var party3 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "みんなの党") party3.push(candidates[i]);
    
    var party4 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "日本維新の会") party4.push(candidates[i]);
    
    var party5 = new Array();
    for (var i = 1, l = candidates.length; i < l; i++)     
        if(candidates[i].party == "公明党") party5.push(candidates[i]);

    console.log("■　政党ごとの合計ポイント");
    
    console.log("自由民主党：" + getSummary(party0));
    console.log("民主党：" + getSummary(party1));
    console.log("日本共産党：" + getSummary(party2));
    console.log("みんなの党：" + getSummary(party3));
    console.log("日本維新の会：" + getSummary(party4));
    console.log("公明党：" + getSummary(party5));
    
    console.log("■　政党ごとの平均ポイント");
    
    console.log("自由民主党：" + getSummaryAvarage(party0));
    console.log("民主党：" + getSummaryAvarage(party1));
    console.log("日本共産党：" + getSummaryAvarage(party2));
    console.log("みんなの党：" + getSummaryAvarage(party3));
    console.log("日本維新の会：" + getSummaryAvarage(party4));
    console.log("公明党：" + getSummaryAvarage(party5));
    
    console.log("■　政党ごとの平均ポイント　割る　政党ごとの合計ポイント");
    
    console.log("自由民主党：" + getSummaryAvarage(party0) /  getSummary(party0));
    console.log("民主党：" + getSummaryAvarage(party1) /  getSummary(party1));
    console.log("日本共産党：" + getSummaryAvarage(party2) /  getSummary(party2));
    console.log("みんなの党：" + getSummaryAvarage(party3) /  getSummary(party3));
    console.log("日本維新の会：" + getSummaryAvarage(party4) /  getSummary(party4));
    console.log("公明党：" + getSummaryAvarage(party5) /  getSummary(party5));
    
    function getSummary (list) {
        var count = 0;
        for(var i = 0; i < list.length; i ++) {
            count += list[i].my_pint;
        }
        return Math.floor(count);
    }
    
    function getSummaryAvarage (list) {
        var count = 0;
        for(var i = 0; i < list.length; i ++) {
            count += list[i].my_pint;
        }
        count /= list.length;
        return Math.floor(count);
    }
});