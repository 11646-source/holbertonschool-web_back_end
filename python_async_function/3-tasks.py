#!/usr/bin/env python3
"""
A module that create asyncio tasks and run asynchronous
"""
import asyncio
wait_random = __import__(' 0_basic_async_syntax import wait_random')  # adjust import path if needed

def task_wait_random(max_delay: int) -> asyncio.Task:
    """
    Create and return an asyncio.Task that runs wait_random(max_delay).

    Args:
        max_delay (int): The maximum delay in seconds.

    Returns:
        asyncio.Task: A task wrapping the wait_random coroutine.
    """
    return asyncio.create_task(wait_random(max_delay))
