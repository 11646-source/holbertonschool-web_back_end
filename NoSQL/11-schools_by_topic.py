#!/usr/bin/env python3
"""
Module that return a list function of school having specific topic
"""
def schools_by_topic(mongo_collection, topic):
    """
    Returns a list of schools having a specific topic.

    :param mongo_collection: pymongo collection object
    :param topic: string topic to search for
    :return: list of matching school documents
    """
    schools = mongo_collection.find({"topics": topic})
    return list(schools)
