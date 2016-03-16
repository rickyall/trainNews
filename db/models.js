var Sequelize = require('sequelize');
//连接数据
var sequelize = new Sequelize('cia', 'cia', 'ciacia', {
  host: 'qwercia01.mysql.rds.aliyuncs.com',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});
//建立News模型
var News = sequelize.define("t_news_zw", {
  keyword:Sequelize.STRING,
  title:Sequelize.STRING,
  href:Sequelize.STRING,
  rate:Sequelize.DOUBLE(11,0),
  publishtime:Sequelize.DATE,
  servicetype:Sequelize.INTEGER,
  adjust_bond_rate:Sequelize.DOUBLE(11,0)
  },
  {
    freezeTableName: true,
    timestamps: false
  }
);

module.exports = {
   News:News
}
