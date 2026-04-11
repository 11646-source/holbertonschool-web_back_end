#!/usr/bin/env python3
"""
Module representing a function for a basic async program.
"""


import asyncio
import random
import importlib.util 


async def wait_random(max_delay: int = 10) -> float:
    """
    Asynchronous coroutine that waits for a random delay
    between 0 and max_delay seconds (inclusive, float value),
    then returns the delay.

    Args:
        max_delay (int): Maximum delay in seconds. Default is 10.

    Returns:
        float: The actual delay time waited.
    """
    delay = random.uniform(0, max_delay)
    await asyncio.sleep(delay)
    return delay
