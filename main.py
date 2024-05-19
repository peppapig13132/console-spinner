import time
import sys

spinner = ['-', '\\', '|', '/']

for i in range(100):  # Adjust the range as needed for your use case
    for symbol in spinner:
        sys.stdout.write(f'\r{symbol} {i}%')
        sys.stdout.flush()
        time.sleep(0.05)  # Adjust the sleep time as needed

sys.stdout.write('\rDone!')
