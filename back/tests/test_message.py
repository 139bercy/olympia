import pytest

from back.src.core.infra import InMemoryMessageRepository
from back.src.core.usecases import create_message


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
