#!/usr/bin/env python3

"""
Module that update and change function all topic of a school document
"""
def update_topics(mongo_collection, name, topics):
    """
    Update all topics of a school document based on the name.

    Args:
        mongo_collection: pymongo collection object
        name (str): school name to update
        topics (list): list of topics (strings)

    Returns:
        number of documents updated
    """
    if not isinstance(name, str):
        return 0
    if not isinstance(topics, list) or not all(isinstance(t, str) for t in topics):
        return 0

    result = mongo_collection.update_many(
        {"name": name},
        {"$set": {"topics": topics}}
    )

    return result.modified_count
