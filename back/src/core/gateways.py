import abc


class AbstractMessageRepository(abc.ABC):
    @abc.abstractmethod
    def add(self, message):
        raise NotImplementedError

    @abc.abstractmethod
    def get_all(self):
        raise NotImplementedError
