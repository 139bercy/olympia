from back.src.core.gateways import AbstractMessageRepository


class InMemoryMessageRepository(AbstractMessageRepository):
    def __init__(self):
        self.db = []

    def add(self, message):
        self.db.append(message)

    def get_all(self):
        return self.db
