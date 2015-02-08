/**
 * Created by fan on 15/1/12.
 */


var person={ //人物的数据
    id : 'person',
    style : 'base',
    leftStyle : 'personL',
    rightStyle : 'personR',
    leftMoveStyle : 'personLM',
    rightMoveStyle : 'personRM',
    personX : 64,
    personY : 384,
    speedX : 5 ,     //行走速度控制
    direction : 'right'
    };

var grid=[
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','9','9','9','9','0','0','9','9','9','9','9','0','0','9'],
        ['0','0','9','0','0','0','9','0','9','0','0','0','0','0','9','0'],
        ['0','0','9','0','0','0','9','0','9','0','0','0','0','0','9','0'],
        ['0','0','9','9','9','9','0','0','9','9','9','9','0','0','0','9'],
        ['0','0','9','0','9','0','0','0','9','0','0','0','0','0','0','0'],
        ['0','0','9','0','0','9','0','0','9','0','0','0','0','0','9','0'],
        ['0','0','9','0','0','0','9','0','9','9','9','9','9','0','0','9'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','9','0','0','9','0','0','0','9','0','9','0','0','0','9','0'],
        ['0','0','9','0','9','0','0','0','9','0','9','9','0','9','9','0'],
        ['0','0','0','0','9','0','0','0','9','0','9','0','9','0','9','0'],
        ['9','9','0','0','9','0','0','0','9','0','9','0','9','0','9','0'],
        ['0','0','9','0','9','0','0','0','9','0','9','0','0','0','9','0'],
        ['0','0','9','0','9','0','0','0','9','0','9','0','0','0','9','0'],
        ['9','9','0','0','0','9','9','9','0','0','9','0','0','0','9','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','9','9','9','9','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','9','9','9','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['9','9','9','9','9','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','3','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','4','5','0','0','0','0','0'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1'],
        ['1','1','1','1','1','1','1','1','1','1','1','1','1','1','1','1']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['4','5','2','2','2','2','2','2','2','2','2','2','2','2','2','2'],
        ['6','7','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['6','7','8','36','36','36','36','36','36','36','36','36','36','36','36','36'],
        ['6','7','8','41','41','41','41','41','41','41','41','41','41','41','41','41']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['3','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['2','2','2','2','2','2','2','2','2','2','2','2','2','2','2','2'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['36','36','36','36','36','36','36','36','36','36','36','36','36','36','36','36'],
        ['41','41','41','41','41','41','41','41','41','41','41','41','41','41','41','41']
    ],
    [
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','0','0'],
        ['2','2','2','2','2','2','2','2','2','2','2','2','2','2','4','5'],
        ['0','0','0','0','0','0','0','0','0','0','0','0','0','0','6','7'],
        ['36','36','36','36','36','36','36','36','36','36','36','36','36','8','8','8'],
        ['41','41','41','41','41','41','41','41','41','41','41','41','41','8','8','8']
    ],
    [
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'37' ],
        ['29','30','31','0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'29','30','31','0' ,'0' ,'0' ,'38' ],
        ['0' ,'32','0' ,'29','30','31','29','30','31','0' ,'32','0' ,'29','30','31','39' ],
        ['0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','0' ,'39' ],
        ['8' ,'32','8' ,'0' ,'32','0' ,'0' ,'8' ,'8' ,'0' ,'32','0' ,'0' ,'32','0' ,'39' ],
        ['8' ,'32','8' ,'8' ,'32','0' ,'0' ,'8' ,'8' ,'0' ,'32','0' ,'0' ,'32','0' ,'39' ]
    ],
    [
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0', '0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'29','30','31','0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'29','30','31','0' ,'0' ,'0' ],
        ['29','30','31','0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'32','0' ,'29','30','31','29','30','31','0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','9' ,'0' ,'0' ,'32','0' ,'0' ,'0' ,'0' ],
        ['0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','9' ,'0' ,'0' ,'32','8' ,'0' ,'0' ,'29' ],
        ['0' ,'32','0' ,'0' ,'32','0' ,'0' ,'32','0' ,'29','31','32','0' ,'8' ,'8' ,'0' ]
    ],
    [
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'29','30','31','0' ,'0' ,'0' ,'0' ,'8' ,'0' ,'0' ,'0' ,'0' ],
        ['29','30','30','30','31','32','9' ,'0' ,'0' ,'0' ,'0' ,'8' ,'8' ,'0' ,'0' ,'0' ],
        ['30','31','32','0' ,'0' ,'32','29','30','30','30','31','8' ,'8' ,'8' ,'8' ,'8' ],
        ['32','8' ,'8' ,'0' ,'0' ,'32','0' ,'8' ,'32','0' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ]
    ],
    [
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ]
    ],
    [
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ],
        ['0','0','0','0','0','0','0','0','0','0','0','0','8','8','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','0','8','8','8','0','0'],
        ['0','0','0','0','0','0','0','0','0','0','8','8','8','8','0','0'],
        ['0','0','0','0','0','0','0','0','0','8','8','8','8','8','0','0'],
        ['0','0','0','0','0','0','0','0','8','8','8','8','8','8','0','0'],
        ['0','0','0','0','0','0','0','8','8','8','8','8','8','8','0','0'],
        ['0','0','0','4','5','0','8','8','8','8','8','8','8','8','0','0'],
        ['0','0','0','6','7','8','8','8','8','8','8','8','8','8','0','0'],
        ['0' ,'0' ,'0' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'0' ,'0' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ]
    ],
    [
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'0' ,'8' ],
        ['8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ,'8' ]
    ]
];

var grid2=['start','mushroom','flower'];

var demo=[
    [3660,90,'俄罗斯方块','demo1','http://fengfan.me/tetris.html'],
    [3840,90,'游戏2048','demo2','http://fengfan.me/2048/index.html'],
    [4020,90,'FengFan简介','demo3','http://fengfan.me/aboutme'],
    [4200,90,'百度地图相册动画','demo4','http://fengfan.me/hello/index.html'],
    [4550,110,'知乎网首页仿写','demo5','http://fengfan.me/zhihu/index.html'],
    [4730,110,'果壳网首页仿写','demo6','http://fengfan.me/guoke/index.html']
];

var castle=[
    [69,15],
    [70,15],
    [71,15],

    [85,16],
    [86,20],
    [87,19],

    [100,15],
    [101,17],
    [102,17],
    [103,17],
    [104,15],

    [116,16],
    [117,20],
    [118,18],
    [119,20],
    [120,19],

    [130,20],
    [131,20],
    [132,20],
    [133,20],
    [134,20],
    [135,20],
    [136,20],
    [137,20],
    [138,20],

    [144,20],
    [145,20],
    [146,20],
    //[147,0],
    //[148,0],
    //[149,0],
    //[150,0],
    //[151,0],
    //[152,0],
    //[153,0],
    [154,20],
    [155,20],
    [156,20],

    [160,20],
    [161,20],
    [162,20],
    [163,20],
    [164,20],
    [165,20],
    [166,20],
    [167,20],
    [168,20],
    [169,20],
    [170,20],
    [171,20],
    [172,20],

    [176,20],
    [177,20],
    [178,20],
    //[179,0],
    //[180,0],
    //[181,0],
    //[182,0],
    //[183,0],
    //[184,0],
    //[185,0],
    [186,20],
    [187,20],
    [188,20],

    [192,20],
    [193,20],
    [194,20],
    //[195,0],
    //[196,0],
    //[197,0],
    //[198,0],
    //[199,0],
    //[200,0],
    //[201,0],
    [202,20],
    [203,20],
    [204,20],

    [208,20],
    [209,20],
    [210,20],
    [211,20],
    [212,20],
    [213,20],
    [214,20],
    [215,20],
    [216,20],
    [217,20],
    [218,20],
    [219,20],
    [220,20]
];

var type = { //地图样式

    0 : 'maptype-bare',
    1: 'maptype-land1',
    2: 'maptype-land2',
    3 : 'maptype-ask',
    4 : 'maptype-pipeline1',
    5 : 'maptype-pipeline2',
    6 : 'maptype-pipeline3',
    7 : 'maptype-pipeline4',
    8 : 'maptype-rock',
    9 : 'maptype-nothing',
    10: 'maptype-blockhouse',
    11 : 'maptype-flagTop',
    12 : 'maptype-flagpole',
    13: 'maptype-land3',
    14: 'maptype-stone',
    15: 'maptype-castleRock1',
    16: 'maptype-castleRock2',
    17: 'maptype-castleRock3',
    18: 'maptype-castleRock4',
    19: 'maptype-castleRock5',
    20: 'maptype-castleRock6',
    21: 'maptype-flower1',
    22: 'maptype-flower2',
    23: 'maptype-flower3',
    24: 'maptype-flower4',
    25: 'maptype-start4',
    26: 'maptype-start3',
    27: 'maptype-start2',
    28: 'maptype-start1',
    29: 'maptype-tree1',
    30: 'maptype-tree2',
    31: 'maptype-tree3',
    32: 'maptype-tree4',
    33: 'maptype-mushroom1',
    34: 'maptype-mushroom2',
    35: 'maptype-mushroom3',
    36: 'maptype-sea',
    37: 'maptype-arbor1',
    38: 'maptype-arbor2',
    39: 'maptype-arbor3',
    40: 'maptype-level1',
    41: 'maptype-sea2'

};

window.onload= function () {
    var gameMap,gameWrap,gameText,player;
    var mapType = [];    //地图点阵
    var arr=[];           //障碍物

    var keyLeft=false;     //解除系统键盘延迟
    var keyRight=false;
    var keyUp=false;

    var timer;         //左右运动定时器
    var timer2;        //自由落体运动定时器
    var timer3;
    var units=32;      //地图点阵单位
    var horizonY=480;  //地平线
    var btn1=false;    //使上碰撞唯一
    var btn2=false;    //使上碰撞唯一
    var btn_flowers=true;
    var btn_aboutme=true;
    var btn_level1=true;
    var btn_level2=true;
    var btn_level3=true;
    var btn_level4=true;
    var btn_castle=true;
    var btn_form=false;
    var btn_form2=true;
    var castle_num=0;


    loading();

    function loading() {
        var images = [
            'img/sky.jpg',
            'img/aboutfengfan.png',
            'img/aboutme.gif',
            'img/allbgs.png',
            'img/blackboard.svg',
            'img/contectme.png',
            'img/map-ask.gif',
            'img/move.gif',
            'img/mushroom.gif',
            'img/mylogo.png',
            'img/sea.gif',
            'img/fengfanskill.png',
            'img/fengfandemon.png',
            'img/fengfan.png',
            'img/sea2.png',
            'img/skill-title.png',
            'img/start.gif',
            'img/flower.gif'
        ];

        var iNow = 0;
        for(var i=0; i<images.length; i++){
            loadImage(images[i],function(){
                iNow ++;
                if(iNow == images.length){
                    gameStart();
                }
            });
        }
    }

    function loadImage(url, callback) {
        var img = new Image(); //创建一个Image对象，实现图片的预下载
        img.src = url;
        img.onload = function(){
            img.onload =null;
            callback(img);
        };
    }

    function gameStart() {
        creatHTNL();
        createData();
        createMap();
        mapDelete();
        createPerson();
        createContent();
        gameControl();
        Obstacle();
        collision();
        //animate();
        setInterval(listener,100);
        //createCastle();

    }


    function createData(){
        var data = ['ITEM : RESUME','NAME : FENGFAN','SEX : MAN','AGE : 24','WANT : FRONT-END' ];
        var oDiv = document.createElement('div');   ////最上面的那一行数据
        oDiv.className = 'data_display';
        var oUl = document.createElement('ul');
        for(var i=0; i<data.length; i++){
            var oLi= document.createElement('li');
            oLi.innerHTML =data[i] ;
            oUl.appendChild(oLi);
        }
        oDiv.appendChild(oUl);
        gameWrap.appendChild(oDiv);
    }

    function createPerson(){ //创建人物
        var oDiv = document.createElement('div');
        oDiv.id =person.id;
        oDiv.className =person.style+' '+person.rightStyle;
        oDiv.style.top =person.personY + 'px';
        oDiv.style.left =person.personX + 'px';

        gameMap.insertBefore(oDiv,gameMap.getElementsByTagName('div')[0]);
        player = oDiv;
    }


    function createMap(){ //创建地图

        var mapWidth = 0,
            oList,
            oDiv,
            piece;

        gameMap.className = 'map';

        for(var i=0; i<grid.length; i++){
            oList = document.createElement('div');         //创建地图模块
            oList.className ='map-list';
            mapType[i] = [];
            for(var j=0; j<grid[i].length; j++){           //为地图模块创建点阵,获取了点阵数据
                for(var k=0; k<grid[i][j].length; k++){
                    oDiv = document.createElement('div');
                    piece = grid[i][j][k];
                    oDiv.className = type[piece];  //为创建的点阵添加样式
                    oDiv.type = parseInt(piece);
                    oList.appendChild(oDiv);
                    oDiv.style.left=i*units*16+k*units+'px';
                    oDiv.style.top=j*units+'px';
                    oDiv.style.position='absolute';
                    mapType[i].push(oDiv);
                }
                oList.style.width = grid[i][j].length * units + 'px';
            }
            oList.style.height = grid[i].length * units + 'px';
            oList.position='absolute';
            oList.style.left=i*16*units+'px';
            mapWidth += parseInt(oList.style.width);
            gameMap.appendChild(oList);
        }
        mapType.push(mapType[i]);
        gameMap.style.width = mapWidth + 'px';
        gameWrap.appendChild(gameMap);

    }



    timer=setInterval(gameControlTimer,30);

    function gameControlTimer() {
        var personX=player.offsetLeft;

        if(keyLeft){
            if(personX>=0) {
                personX -= person.speedX;
                player.className =person.style+' '+person.leftMoveStyle;
                player.style.left = personX + 'px';
                if(gameMap.offsetLeft<0&&personX+gameMap.offsetLeft<units)
                    gameMap.style.left=gameMap.offsetLeft+person.speedX+'px';    //地图移动
            }
        }
        else if(keyRight){
            personX+=person.speedX;
            player.className =person.style+' '+person.rightMoveStyle;
            player.style.left=personX+'px';

            if(personX+gameMap.offsetLeft>units*12){   //人走到中间的时候
                if(gameMap.offsetLeft>-5750)
                    gameMap.style.left=gameMap.offsetLeft-person.speedX+'px';    //地图移动

            }

        }else if(keyUp){

        }

        collision();

    }

    function gameControl() {

        gameText = document.getElementById('text');
        gameMap.style.left=0;
        gameText.style.display = 'block';




        document.onkeydown= function (ev) {
            var oEvent=ev||event;
            switch(oEvent.keyCode){

                case 37://left
                    oEvent.preventDefault();
                    keyLeft=true;
                    break;

                case 39://right
                    oEvent.preventDefault();
                    keyRight=true;
                    startMove(gameText,{opacity:0}, function () {
                        gameText.remove();
                    });
                    break;

                case 32://jump
                    oEvent.preventDefault();
                    if(btn1)  //如果是触地状态（上碰撞）则可以跳
                        jumpFall();
                    break;
            }
        };

        document.onkeyup= function (ev) {
            var oEvent=ev||event;
            oEvent.preventDefault();
            switch(oEvent.keyCode){

                case 37://left
                    keyLeft=false;
                    player.className =person.style+' '+person.leftStyle;
                    break;

                case 39://right
                    keyRight=false;
                    player.className =person.style+' '+person.rightStyle;
                    break;
                case 32://up
                    //keyUp=false;
                    break;
            }
        }
    }

    function jumpFall(){
        var iSpeedY=-17;

        clearInterval(timer2);

        timer2=setInterval(function () {
            if (player.offsetTop + iSpeedY >= horizonY - units) //触底
            {
                iSpeedY = 0;
                player.style.top = horizonY - units + 'px';
            }
            else if (btn2){    //撞头了，让上升速度为零
                iSpeedY=0;
                player.style.top=player.offsetTop+'px'
            }
            else{    //自由落体
                iSpeedY++;
                player.style.top=player.offsetTop+iSpeedY+'px';
            }
        },30)
    }

    function Obstacle(){
        for(var i=0;i<13; i++){
            for(var j=0;j<240;j++){
                var type_collision =mapType[i][j];
                if(type_collision.type>0){
                    arr.push(mapType[i][j]);
                }
            }
        }
    }

    function collision() {
        btn1=false;
        btn2=false;
        for(var i=0 ;i<arr.length;i++)
            pzDir(player,arr[i])


    }


    function pzDir(obj1,obj2){
        var L1=obj1.offsetLeft;
        var L2=obj2.offsetLeft;
        var T1=obj1.offsetTop;
        var T2=obj2.offsetTop;


        if(L1>L2-3/4*units&&L1<L2+3/4*units){
            if(T1>=T2-units&&T1<T2+1/16*units){   //上碰撞
                obj1.style.top=obj2.offsetTop-units+'px';
                horizonY=obj2.offsetTop;
                btn1=true;
            }
            else if(!btn1){
                horizonY=480
            }

            if(T1<T2+units&&T1>T2+2/4*units){ //下碰撞
                player.style.top=obj2.offsetTop+units+'px';
                btn2=true;  //下碰撞

                if(obj2.className==type[3]){

                    var beforeTop=obj2.offsetTop;
                    startMove(obj2,{top:beforeTop-16});
                    setTimeout(function () {
                        startMove(obj2,{top:beforeTop})
                    },200);

                    if(obj2.className==type[3])
                        obj2.className=type[9];
                }


            }
        }
        else if(T1>T2-2/4*units&&T1<T2+3/4*units){

            if(L1>L2-units&&L1<L2-1/4*units)  //左碰撞
                obj1.style.left=obj2.offsetLeft-units+'px';

            if(L1>L2+1/4*units&&L1<L2+units)    //右碰撞
                obj1.style.left=obj2.offsetLeft+units+'px';
        }


    }


    function mapDelete() {  //性能优化(只显示可见区域的地图否则删除)
        var temp=[];
        var K=0;

        for(var i=0;i<gameMap.childNodes.length;i++){   //地图存档
            temp.push(gameMap.childNodes[i]);
        }

        for(i=3;i<13;i++){    //删除后面地图
            gameMap.removeChild(gameMap.childNodes[3]);
        }

        setInterval(checkMap,300);

        function checkMap() {
            var dis=player.offsetLeft-K*units*16;
            if(dis>units*31){
                K++;
                gameMap.removeChild(gameMap.childNodes[2]);            //删除前面地图
                gameMap.appendChild(temp[K+2]);                       //还原后面地图
            }
            if(dis<2*units&&player.offsetLeft>16*units){
                K--;
                gameMap.removeChild(gameMap.childNodes[4]);           //删除后面地图
                gameMap.insertBefore(temp[K],gameMap.childNodes[2]); //还原前面地图
            }
        }

    }


    function createContent() {

        var picList=document.createElement('div');
        picList.id='picList';
        picList.className='picList';
        gameMap.insertBefore(picList,gameMap.getElementsByTagName('div')[1]);

        <!-- 第一关-->
        <!--横幅-->
        /*var oDiv=document.createElement('div');
         oDiv.className=type[40];
         picList.appendChild(oDiv);*/


        <!--第一关-->

        <!--恐龙举牌子-->
        var dragon=document.createElement('div');
        dragon.className='dragon';
        picList.appendChild(dragon);

        <!--level1Banner-->
        var level1Banner=document.createElement('div');
        level1Banner.id='level1Banner';
        level1Banner.className='level1Banner';
        picList.appendChild(level1Banner);


        <!--aboutMe-->
        var aboutMe=document.createElement('div');
        aboutMe.id='aboutMe';
        aboutMe.className='aboutMe';
        picList.appendChild(aboutMe);
        var logo=document.createElement('div');
        logo.className='logo';
        aboutMe.appendChild(logo);
        var text=document.createElement('div');
        text.className='text';
        text.innerHTML="<h2>FengFan</h2><p>前端技术爱好者</p>";
        aboutMe.appendChild(text);
        var content=document.createElement('div');
        content.className='content';
        content.innerHTML="<p>前端技术爱好者一枚，痴迷前端的一切，半年前开始入坑前端，从此义无反顾踏上这条不归路。</p>" +
            "<p>生活中保持着对前端领域的关注并学习着，结合自己对游戏、动画领域的兴趣，喜欢追求尝试一些在web上能够表现出来的完美效果。</p>" +
            "<p>对Web充满热情，为了解决技术问题已经习惯了熬夜，只是为了一个愿望————成为一位优秀的前端工程师。</p>";
        aboutMe.appendChild(content);



        <!--第二关-->


        <!--level2Banner-->
        var level2Banner=document.createElement('div');
        level2Banner.id='level2Banner';
        level2Banner.className='level2Banner';
        picList.appendChild(level2Banner);

        <!--花朵们-->
        var twinkling=document.createElement('div');
        twinkling.style.display='none';
        twinkling.id='twinkling';
        twinkling.style.left=2990+'px';
        twinkling.style.top=98+'px';
        twinkling.style.position='absolute';
        picList.appendChild(twinkling);

        for(var i=0 ;i<3;i++){
            for(var j=0;j<4;j++){
                var icon=document.createElement('div');
                icon.className=grid2[i];
                icon.style.position='absolute';
                icon.style.left=j*80+'px';
                icon.style.top=i*64+'px';
                twinkling.appendChild(icon);
            }
        }

        <!--skill text-->
        var skill=document.createElement('div');
        skill.id='skill';
        skill.style.display='none';
        skill.style.opacity=0;
        skill.style.width=600+'px';
        skill.style.left=2590+'px';
        skill.style.top=0+'px';
        skill.style.position='absolute';
        skill.innerHTML=
            "<div class='skillContainer'>" +
            "<div class='skillAbility'>" +
            "<p>初学乍练</p><p>初窥门径</p><p>略有小成</p><p>驾轻就熟</p><p>心领神会</p><p>炉火纯青</p>" +
            "</div>" +
            "<div class='skillName'>" +
            "<p>HTML</p><p>CSS</p><p>JavaScirpt</p>" +
            "</div>" +
            "</div>";
        picList.appendChild(skill);


        <!--第三关-->


        <!--level3Banner-->
        var level3Banner=document.createElement('div');
        level3Banner.id='level3Banner';
        level3Banner.className='level3Banner';
        picList.appendChild(level3Banner);

        <!--demoList-->
        for(i=0;i<6;i++){
            var demoContainer=document.createElement('div');
            demoContainer.className='demoContainer';
            demoContainer.style.left=demo[i][0]+'px';
            demoContainer.style.top=demo[i][1]+'px';
            picList.appendChild(demoContainer);
            var demoA=document.createElement('a');
            demoA.className='demoA';
            demoA.href=demo[i][4];
            demoA.target='_blank';
            demoContainer.appendChild(demoA);
            var demoPic=document.createElement('img');
            demoPic.className='demoPic '+demo[i][3];
            demoA.appendChild(demoPic);
            var demoText=document.createElement('p');
            demoText.className='demoText';
            demoText.innerHTML=demo[i][2];
            demoContainer.appendChild(demoText);
        }


        <!--第四关-->

        <!--石头房子背景-->
        var bg=document.createElement('div');
        bg.className='bg-final';
        picList.appendChild(bg);

        <!--level4Banner-->
        var level4Banner=document.createElement('div');
        level4Banner.id='level4Banner';
        level4Banner.className='level4Banner';
        picList.appendChild(level4Banner);

    }

    function createCastle() {

        setInterval(function () {
            if(castle_num<castle.length){
                mapType[12][castle[castle_num][0]].className=type[castle[castle_num][1]];
                castle_num++;
                btn_form=true;
            }
        },60);
    }

    function createForm() {
        var picList=document.getElementById('picList');
        var form=document.createElement('form');
        form.id=form;
        form.action="MAILTO:fengfan.me@fengfan.me";
        form.method="get";
        form.enctype="text/plain";
        picList.appendChild(form);
        var form1=document.createElement('input');
        form1.type='text';
        form1.className='form '+'form1';
        form1.placeholder="邮件主题";
        form1.name="subject";
        form.appendChild(form1);
        startMove(form1,{width:220});
        var form3=document.createElement('textarea');
        form3.className='form '+'form3';
        form3.placeholder="邮件内容";
        form3.type='text';
        form3.name="body";
        form.appendChild(form3);
        startMove(form3,{width:220});
        var submit=document.createElement('input');
        submit.className='submit';
        submit.id='submit';
        submit.type="submit";
        submit.value="发送";
        form.appendChild(submit);
        startMove(submit,{opacity:100});
    }


    function creatHTNL() {
        document.body.innerHTML=
            "<div id='main'>" +
            "<div id='text'>" +
            "<div class='name'></div>" +
            "<p class='explanation'>Left: ← Right: →<BR>JUMP : SPACE <br>START GAME</p>" +
            "<div class='boo'>©MADE BY FENGFAN</div>" +
            "</div></div>";

        gameMap = document.createElement('div');
        gameWrap = document.getElementById('main');
    }

    function listener() {

        if(mapType[2][156].className==='maptype-nothing'&&btn_aboutme){
            btn_aboutme=false;
            var aboutMe= document.getElementById('aboutMe');
            aboutMe.style.display='block';
            startMove(aboutMe,{top:0})

        }

        if(mapType[5][112].className==='maptype-nothing'&&btn_flowers){
            var twinkling=document.getElementById('twinkling');
            var skill=document.getElementById('skill');

            skill.style.display='block';
            twinkling.style.display='block';
            startMove(twinkling,{left:2690},
                startMove(skill,{opacity:100})
            );

            btn_flowers=false;
        }
        <!----------信息板显示----------------->
        if(player.offsetLeft>1200&&btn_level1){
            levelTextShow('level1Banner');
            btn_level1=false;
        }

        if(player.offsetLeft>2440&&btn_level2){
            levelTextShow('level2Banner');
            btn_level2=false;
        }

        if(player.offsetLeft>3550&&btn_level3){
            levelTextShow('level3Banner');
            btn_level3=false;
        }

        if(player.offsetLeft>5650&&btn_level4){
            levelTextShow('level4Banner');
            btn_level4=false;
        }

        <!----------城堡----------------->
        if(player.offsetLeft>5950&&btn_castle){
            btn_castle=false;
            createCastle()
        }

        if(mapType[12][210].className==type[20]&&btn_form2){
            btn_form2=false;
            createForm();
        }
    }

    function levelTextShow(id) {
        var getObj=document.getElementById(id);
        if(id=='level4Banner')
            startMove(getObj,{top:80}, function () {
                startMove(getObj,{left:6178});
            });
        else
            startMove(getObj,{top:30});

    }

}



