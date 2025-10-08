import webview

class Window:
    def __init__(self, file_name: str = ""):
        self.file_name = file_name

    def open(self):
        window = webview.create_window(
            f'Tabular - {self.file_name}',
            'static/index.html',
            width=1920,
            height=1800
        )
        webview.start()