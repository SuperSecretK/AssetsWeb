export default class Strings {
  constructor(lang) {
    this.lang = lang === 'en' ? 0 : 1;
    this.strings = {
      logout: ['Logout', 'Đăng xuất'],
      accTotal: ['Account total', 'Giá trị tài khoản'],
      idle: ['Idle', 'Số dư tiền'],
      assets: ['Assets', 'Tài sản'],
      trades: ['Trades', 'Lịch sử giao dịch'],
      transfer: ['Transfer', 'Lịch sử chuyển tiền'],
      symbol: ['Symbol', 'Mã'],
      volume: ['Volume', 'Khối lượng'],
      avgCap: ['Avg capital', 'Giá vốn trung bình'],
      totalCap: ['Total captical', 'Tổng giá vốn'],
      market: ['Market', 'Giá thị trường'],
      assetsVal: ['Assets value', 'Thành tiền'],
      plv: ['Profit/Loss', 'Lời/Lỗ'],
      pl: ['Profit/Loss %', 'Lời/Lỗ %'],
      type: ['Type', 'Giao dịch'],
      buyPrice: ['Buy price', 'Giá mua'],
      sellPrice: ['Sell price', 'Giá bán'],
      date: ['Date', 'Ngày'],
      buy: ['Buy', 'Mua'],
      sell: ['Sell', 'Bán'],
      amount: ['Amount', 'Giá trị'],
      desc: ['Description', 'Miêu tả'],
      deposit: ['Deposit', 'Nạp tiền'],
      withdraw: ['Withdraw', 'Rút tiền'],
      about: ['About', 'Chi tiết'],
      chart: ['Chart', 'Biểu đồ giá'],
      total: ['Total', 'Tổng cộng']
    };
  }

  str(string) {
    return this.strings[string][this.lang];
  }
}