import pytest

from back.src.core.infra import (
    InMemoryMessageRepository,
    InMemoryConversationRepository,
)
from back.src.core.models import Conversation
from back.src.core.usecases import (
    create_message,
    create_conversation,
    update_conversation,
)


@pytest.fixture
def message():
    return {"title": "Hello World!"}


def test_add_one_message_to_source(message):
    # Arrange
    repository = InMemoryMessageRepository()
    # Act
    create_message(repository=repository, message=message)
    # Assert
    assert len(repository.db) == 1


def test_message_get_an_answer(message):
    # Arrange
    repository = InMemoryMessageRepository()
    repository.db = [message]
    answer = {"title": "This is my answer"}
    # Act
    create_message(repository=repository, message=answer)
    # Assert
    assert len(repository.db) == 2


def test_messages_should_be_part_of_one_conversation(message):
    # Arrange
    uuid = "uuid"
    repository = InMemoryConversationRepository([])
    # Act
    create_conversation(repository=repository, uuid=uuid, message=message)
    # Assert
    conversation = repository.get(uuid=uuid)
    assert conversation.uuid == uuid


def test_prompt_should_receive_an_answer(message):
    # Arrange
    uuid = "abcd"
    conversation = Conversation(uuid=uuid, messages=[message])
    repository = InMemoryConversationRepository()
    repository.db.append(conversation)
    answer = {"title": "Hello !"}
    # Act
    update_conversation(repository=repository, uuid=uuid, message=answer)
    # assert
    conversation = repository.get(uuid=uuid)
    assert len(conversation.messages) == 2
