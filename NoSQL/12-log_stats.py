#!/usr/bin/env python3
"""
Nginx log stats from MongoDB
"""

from pymongo import MongoClient

if __name__ == "__main__":
    # Connect to MongoDB (default localhost)
    client = MongoClient("mongodb://127.0.0.1:27017")

    # Select database and collection
    db = client.logs
    collection = db.nginx

    # Total number of logs
    total_logs = collection.count_documents({})
    print(f"{total_logs} logs")

    # Methods stats
    print("Methods:")
    methods = ["GET", "POST", "PUT", "PATCH", "DELETE"]
    for method in methods:
        count = collection.count_documents({"method": method})
        print(f"\tmethod {method}: {count}")

    # GET /status count
    status_count = collection.count_documents({
        "method": "GET",
        "path": "/status"
    })
    print(f"{status_count} status check")
