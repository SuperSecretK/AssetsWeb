export default class Strings {
  constructor(lang) {
    this.lang = lang === 'en' ? 0 : 1;
    this.strings = {
      assets: ['Assets', 'Tai san'],
      trades: ['Trades', 'Lich su giao dich'],
      transfer: ['Transfer', 'Lich su chuyen tien'],
      symbol: ['Symbol', 'Ma'],
      volume: ['Volume', 'Khoi luong'],
      cap: ['Capital single', 'Von'],
      capAvg: ['Captical avg', 'Von trung binh'],
      market: ['Market single', 'Gia thi truong'],
      marketAvg: ['Market avg', 'Gia trung binh'],
      plv: ['Profit/Loss', 'Loi/Lo'],
      pl: ['Profit/Loss %', 'Loi/Lo %'],
      type: ['Type', 'Giao dich'],
      buyPrice: ['Buy price', 'Gia mua'],
      sellPrice: ['Sell price', 'Gia ban'],
      date: ['Date', 'Ngay'],
      buy: ['Buy', 'Mua'],
      sell: ['Sell', 'Ban'],
      amount: ['Amount', 'Gia tri'],
      desc: ['Description', 'Mieu ta'],
      deposit: ['Deposit', 'Nap tien'],
      withdraw: ['Withdraw', 'Rut tien'],
    };
  }

  str(string) {
    console.log(this.strings);
    return this.strings[string][this.lang];
  }
}