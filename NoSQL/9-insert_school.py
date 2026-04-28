#!/usr/bin/env python3
"""
Module function that insert new document in collection on kwargs
"""
def insert_school(mongo_collection, **kwargs):
    """
    Inserts a new document into the given MongoDB collection
    :param mongo_collection: pymongo collection object
    :param kwargs: key-value pairs representing the document
    :return: the _id of the inserted document
    """

    result = mongo_collection.insert_one(kwargs)
    return result.inserted_id
