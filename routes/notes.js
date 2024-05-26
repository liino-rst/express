var express         = require('express');
var router          = express.Router();

// レスポンスのデータ（ノート全体）
const responseObjectDataAll = {
    textObejct1 : {
        id: 1,
        title: 'ノート１のタイトルです',
        subTitle: 'ノート１のサブタイトルです',
        bodyTitle: 'ノート１の本文です'
    },
    textObejct2 : {
        id: 2,
        title: 'ノート2のタイトルです',
        subTitle: 'ノート2のサブタイトルです',
        bodyTitle: 'ノート2の本文です'
    }
};

/**
 * メモ全権取得するAPI
 * @returns {Object[]} data
 * @returns {number} data.id - ID
 * @returns {string} data.title - タイトル
 * @returns {string} data.text - 内容
 */
router.get('/', function (req, res, next) {
    // 全件取得して返す
    res.json(responseObjectDataAll);
})

module.exports = router;