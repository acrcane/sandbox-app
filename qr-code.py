import qrcode
from datetime import datetime
from PIL import Image

# Генеруємо текст з поточною датою і часом
current_datetime = datetime.now().strftime("Дата: %Y-%m-%d Час: %H:%M:%S")

# Створюємо QR-код
qr = qrcode.make(current_datetime)

# Зберігаємо QR-код у файл
output_path = "/mnt/data/qr_code_datetime.png"
qr.save(output_path)

# Відображаємо QR-код
qr.show()

# Повертаємо шлях до файлу
output_path
