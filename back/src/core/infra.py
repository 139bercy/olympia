from back.src.core.gateways import (
    AbstractMessageRepository,
    AbstractConversationRepository,
)
from back.src.core.models import Conversation


class InMemoryMessageRepository(AbstractMessageRepository):
    def __init__(self):
        self.db = []

    def add(self, message):
        self.db.append(message)

    def get_all(self):
        return self.db


class InMemoryConversationRepository(AbstractConversationRepository):
    def __init__(self, db=[]):
        self.db = db

    def add(self, conversation):
        self.db.append(conversation)

    def get(self, uuid: str):
        return next(
            (conversation for conversation in self.db if conversation.uuid == uuid),
            None,
        )

    def update(self, conversation: Conversation):
        conversation = next(
            (item for item in self.db if item.uuid == conversation.uuid), None
        )
        self.db = [conversation]
