// Lỗi 1:
// Điều kiện cupIndex < orderQuantity khiến vòng lặp chỉ chạy 2 lần với orderQuantity = 3, phải sửa thành cupIndex <= orderQuantity

// Lỗi 2:
// Chiết khấu 10% được đặt bên trong vòng lặp nên mỗi lần thêm một ly lại giảm tiếp 10% trên tổng tiền hiện tại, phải tính đủ tiền các ly trước, sau đó mới áp dụng chiết khấu một lần

// He thong POS quay thu ngan Highlands Coffee
const drinkName = "Phin Sữa Đá";
const basePrice = 29000;
const drinkSize = "M";
const toppingsPerCup = 2;
const orderQuantity = 3;
const isGoldMember = true;
const toppingPrice = 8000;

let sizeUpcharge = 0;

if (drinkSize === "M") {
    sizeUpcharge = 6000;
} else if (drinkSize === "L") {
    sizeUpcharge = 10000;
}

// Tính tiền 1 ly hoàn chỉnh
const singleCupPrice = basePrice + sizeUpcharge + (toppingsPerCup * toppingPrice);

let totalBill = 0;

for (let cupIndex = 1; cupIndex <= orderQuantity; cupIndex++) {
    totalBill += singleCupPrice;
    }

if (isGoldMember) {
    totalBill = totalBill * 0.9;
    }

console.log("Tổng thanh toán:", totalBill, "VNĐ");