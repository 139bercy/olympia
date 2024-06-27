import abc

from back.src.core.models import Conversation


class AbstractMessageRepository(abc.ABC):
    @abc.abstractmethod
    def add(self, message):
        raise NotImplementedError

    @abc.abstractmethod
    def get_all(self):
        raise NotImplementedError


class AbstractConversationRepository(abc.ABC):

    @abc.abstractmethod
    def add(self, conversation: Conversation):
        raise NotImplementedError

    @abc.abstractmethod
    def get(self, uuid: str):
        raise NotImplementedError

    @abc.abstractmethod
    def update(self, conversation: Conversation):
        raise NotImplementedError
