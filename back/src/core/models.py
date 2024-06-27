class Conversation:
    def __init__(self, uuid: str, messages: list):
        self.uuid = uuid
        self.messages = messages

    @classmethod
    def create(cls, uuid, message):
        return cls(uuid=uuid, messages=[message])

    def add(self, message):
        self.messages.append(message)

    def __repr__(self):
        return f"<Conversation: {self.uuid}>"
