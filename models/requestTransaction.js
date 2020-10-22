"use strict";
module.exports = (sequelize, DataTypes) => {
  const requestTransaksi = sequelize.define(
    "requestTransaksi",
    {
      status_code: DataTypes.STRING,
      status_message: DataTypes.STRING,
      transaction_id: DataTypes.STRING,
      order_id: DataTypes.STRING,
      gross_amount: DataTypes.number,
      payment_type: DataTypes.STRING,
      transaction_time: DataTypes.STRING,
      transaction_status: DataTypes.STRING,
      bank: DataTypes.STRING,
      va_number: DataTypes.STRING,
      fraud_status: DataTypes.STRING,
      bca_va_number: DataTypes.STRING,
      pdf_url: DataTypes.STRING,
      finish_redirect_url: DataTypes.STRING,
    },
    {}
  );
  requestTransaksi.associate = function (models) {
    // associations can be defined here
  };
  return requestTransaksi;
};
