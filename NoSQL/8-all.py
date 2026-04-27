#!/usr/bin/env python3
"""
Module that provides all documents in mongoDB
"""
def list_all(mongo_collection):
    """
    List all documents in a MongoDB collection.

    :param mongo_collection: pymongo collection object
    :return: list of documents (empty list if none)
    """
    return list(mongo_collection.find())
