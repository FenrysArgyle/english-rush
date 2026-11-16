# english rush

## Menu và mini-game
Trang chủ có ba lựa chọn: Vượt chướng ngại vật Tiếng Anh, Memory Match và Word Quest. Mỗi trò có nút **Quay lại Menu**. Đường chạy tạm dừng khi về menu và tiếp tục khi chọn lại; hai mini-game bắt đầu ván mới khi được chọn.
- **Memory Match:** 16 thẻ, 8 cặp từ Anh–Việt được chọn ngẫu nhiên từ bộ 64 từ mỗi ván. Chọn hai thẻ mỗi lượt; cặp sai úp lại sau 1 giây, cặp đúng giữ mở. Đồng hồ bắt đầu ở thẻ đầu; hoàn thành hiển thị thời gian và lượt lật. Chơi lại xáo trộn thẻ.
- **Word Quest:** bảng 9×9, 6 từ được chọn ngẫu nhiên từ bộ 64 từ nhiều chủ đề, theo hàng ngang/dọc/chéo và cả hai chiều. Kéo chuột/ngón tay hoặc chạm lần lượt hai đầu từ; bàn phím dùng Tab/phím mũi tên để di chuyển, Enter/Space chọn hai đầu. Từ đúng đổi màu và gạch khỏi danh sách; đủ 6 từ hiện kết quả. Chơi lại tạo bảng mới.
- Đồng hồ mini-game dừng khi tab bị ẩn. Hai mini-game dùng chữ và giao diện cục bộ, không phụ thuộc tải hình ảnh hoặc âm thanh.

### Kiểm tra phần bổ sung
Kiểm tra cú pháp và mô phỏng logic đạt: khóa lật thẻ thứ ba, đếm lượt, ghép hết 8 cặp, chơi lại/hủy thao tác chờ; 150 bảng Word Quest có đủ từ và hoàn thành được, chọn kéo/hai đầu/đảo chiều; đồng hồ và chuyển menu. Các thao tác được mô phỏng, chưa phải bằng chứng chuột/cảm ứng thật. Phiên trình duyệt kiểm thử không khởi động được; bố cục, hình ảnh, âm thanh và tương tác trên thiết bị vẫn cần xác minh trực tiếp.

## Bản triển khai
Game HTML5 Canvas 2D, loại `english-quiz-endless-runner`, theo thiết kế V1.0.0 đã duyệt. Có vòng chơi đầy đủ, hình ảnh robot ba hoạt ảnh, câu hỏi, combo, ba tim, kết quả và chơi lại. Kiểm tra nguồn và mô phỏng Node được thực hiện khi bàn giao. Kiểm tra trình duyệt, bố cục thực tế, chất lượng hoạt ảnh, âm thanh và HTTP bảng xếp hạng thuộc bước kiểm thử độc lập tiếp theo; không coi kiểm tra nguồn là bằng chứng trình duyệt.

## Mở và điều khiển
Nhấp đúp `index.html` để mở trực tiếp trong trình duyệt, không cần máy chủ hoặc công cụ dựng.
- Bắt đầu: nút **Bắt đầu chạy** hoặc Enter ở màn hình sẵn sàng.
- Trả lời: chuột, chạm hoặc phím **1–4 / A–D**, tương ứng thứ tự bốn lựa chọn.
- Sau lỗi: đọc giải thích rồi chọn **Tiếp tục**. Hết tim: **Chơi lại**.
- Nút âm thanh giữ lựa chọn qua các lượt; điều khiển cả nhạc nền và hiệu ứng trong cả ba trò.
- Bảng xếp hạng và sửa biệt danh mở theo thao tác chủ động. Esc đóng hộp thoại.

## Mục tiêu và luật
Trả lời đúng để robot tự nhảy qua tinh thể và tăng kỷ lục. Đây là game vô tận, không có màn thắng cuối hoặc hòa. Bắt đầu với ba tim; sai hoặc hết giờ mất một tim. Lỗi thứ ba kết thúc lượt. Điểm cuối là tổng điểm câu đúng; kỷ lục thiết bị lưu khi có thể truy cập localStorage.

48 câu THPT chia đều ba dạng. Mỗi túi câu hỏi xáo trộn không lặp, bốn đáp án cũng xáo trộn. Đồng hồ 15 giây, riêng câu cấu trúc 20 giây. Khi hỏi, đường chạy và hoạt ảnh dừng; đồng hồ vẫn chạy. Khi ẩn trang, đồng hồ dừng để tránh mất tim bất công. Mỗi câu đúng nhận `100 + min(100, 20 × (combo - 1))`; sai đặt lại combo. Tốc độ tăng từ 260 lên tối đa 420, không rút ngắn thời gian trả lời.

## Hình ảnh và âm thanh
Giữ sáu tài nguyên đã duyệt: robot chạy/nhảy/va chạm, nền xa, lớp phố gần, tinh thể. Tài nguyên ảnh dùng địa chỉ SoonLab đã đăng ký; không cần mạng để giữ gameplay nếu ảnh không tải được. Mỗi vai trò có hình vẽ dự phòng tương ứng, gồm robot có chuyển động chân/tay, phố neon và tinh thể nhiều mặt. Cảnh báo tải ảnh phản ánh trong giao diện kiểm thử. Các trạng thái này cần xem lại bằng trình duyệt ở bước hoàn thiện.

Ba hiệu ứng tổng hợp theo cấu hình đã duyệt: nhảy, trả lời đúng và va chạm. Nhạc nền do người tạo cung cấp: Attack of the Killer Queen cho đường chạy, Tokyovania cho Memory Match, はじまりの曲 cho Word Quest. Nhạc lặp lại với âm lượng 0.08, dừng khi về menu và đổi theo trò. Nút âm thanh tắt cả nhạc và hiệu ứng, giữ lựa chọn qua các lượt. Nếu nhạc không tải được, dùng âm tổng hợp nhỏ; gameplay không bị chặn. Bảng xếp hạng không chặn khởi động hoặc chơi lại khi mất kết nối. Điểm của lượt và kỷ lục trực tuyến được trình bày riêng. Biệt danh không lưu thành công giả khi máy chủ lỗi.

## Điểm chỉnh sửa
- `data/game-spec.json`: thiết kế đã duyệt; bảo toàn ở giai đoạn lập trình.
- `data/config.json` / `data/config.js`: câu hỏi, điểm, thời gian, bố cục và âm thanh; nguồn và bản phản chiếu phải đồng bộ.
- `data/assets.json` / `data/assets.js`: vai trò hình ảnh và metadata tài nguyên đã duyệt.
- `scripts/core.js`, `scripts/gameplay.js`: dữ liệu lượt và cơ chế.
- `scripts/input.js`, `scripts/audio.js`: điều khiển và âm thanh.
- `scripts/renderer.js`, `scripts/ui.js`, `styles/main.css`: hình ảnh, giao diện và bảng xếp hạng.
- `scripts/test-hook.js`, `scripts/game.js`: mô phỏng, khởi động và ghép các mô-đun.

## Kiểm thử và bàn giao
Giao diện `window.__CODEX_GAME_TEST__` cung cấp `snapshot()`, `simulate(input)`, `restart()`.
Ví dụ: `simulate({type: "start"})`, `simulate({type: "tick", seconds: 5})`, `simulate({type: "key", key: "1", frames: 1})`, `simulate({type: "asset-proof"})`, `simulate({type: "outcome", state: "gameover"})`.
Mô phỏng dùng chính đường xử lý gameplay và tự bật `window.SoonLabGame.testMode` để không gửi điểm thử. Snapshot chứa điểm cuối, đời sống gửi điểm, thứ tự đáp án, thời gian và hoạt ảnh đang chạy. Restart giữ kỷ lục và âm thanh, đặt lại dữ liệu lượt.

Các kiểm tra trình duyệt còn bàn giao: bốn phím số/chữ và cảm ứng, đúng/sai/hết giờ, điện thoại dọc/ngang, bàn phím ảo khi sửa tên, ảnh không tải, âm thanh sau cử chỉ và mute, mô phỏng HTTP bằng chặn mạng cục bộ. Không gửi điểm kiểm thử lên dịch vụ thật.

## Nhúng SoonLab
Cầu nối SoonLab V2 được nạp trước tệp khởi động, dùng parent origin mặc định, không ghi đè. Host phải thực hiện `soonlab:parent-hello` / `soonlab:parent-ack` và xử lý `soonlab:iframe-ready` / `soonlab:iframe-runtime`. Ready chỉ phát sau khi ảnh đã tải hoặc chuyển sang dự phòng, điều khiển đã gắn và khung hình đầu đã vẽ. Cầu nối vắng mặt không chặn gameplay.

## Hoàn thiện giao diện
Đã tách điểm trả tiêu điểm cho bảng xếp hạng và hộp sửa biệt danh, tránh mất tiêu điểm khi đóng hai hộp liên tiếp. Tên dài được ngắt dòng và thẻ kỷ lục cá nhân không co lại khi danh sách cuộn. Lần kiểm tra trình duyệt của bước hoàn thiện không thiết lập được kết nối đến phiên Chrome riêng; chưa xác minh hình ảnh, bố cục, cảm ứng, âm thanh thực tế hoặc HTTP bảng xếp hạng. Không gửi điểm thử lên dịch vụ thật.

## Cập nhật câu hỏi, từ vựng và nhạc nền
- Đường chạy có 48 câu hỏi, 16 câu mỗi dạng; bộ câu hỏi xáo trộn không lặp trong chu kỳ.
- Bộ 64 từ Anh–Việt dùng chung cho Memory Match và Word Quest. Mỗi ván chọn ngẫu nhiên 8 cặp (16 thẻ) hoặc 6 từ; số mục tiêu không tăng.
- Đã xác định nhạc bằng thẻ tiêu đề trong ba tệp người tạo cung cấp: Attack of the Killer Queen cho đường chạy, Tokyovania cho Memory Match, はじまりの曲 cho Word Quest. Giữ nguyên URL phát trực tiếp; không tải lại lên kho tài nguyên.
- Kiểm thử logic bằng Node đạt: 200 ván Memory Match, 500 bảng Word Quest, duyệt hết 64 từ, hoàn thành từng ván, 48 câu không lặp, đổi nhạc/dừng nhạc/tắt âm bằng bộ giả lập âm thanh. Kiểm tra sandbox chuẩn của trò chơi cũng đạt.
- Chưa hoàn tất xác nhận đóng gói: bộ kiểm tra hiện chỉ nhận URL nhạc nền chính và các hiệu ứng đã khai báo; hai URL nhạc nền riêng cho mini-game trong cấu hình bị báo không hỗ trợ. Không sửa hay vô hiệu hóa bộ kiểm tra để bỏ qua lỗi này.
- Chrome kiểm thử không khởi động được kết nối; chưa xác minh bố cục, tương tác chuột/cảm ứng và phát/nghe nhạc thực tế. Khi mạng hoặc âm thanh không khả dụng, trò chơi vẫn hoạt động với âm dự phòng.
