from back.src.core.models import Conversation


def create_message(repository, message):
    repository.add(message=message)


def create_conversation(repository, uuid: str, message: dict):
    conversation = Conversation.create(uuid=uuid, message=message)
    repository.add(conversation=conversation)


def update_conversation(repository, uuid: str, message: dict):
    conversation = repository.get(uuid=uuid)
    conversation.add(message=message)
    repository.update(conversation=conversation)
