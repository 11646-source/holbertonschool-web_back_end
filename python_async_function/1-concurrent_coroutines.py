#!/usr/bin/env python3
"""
Async routine that spawns wait_random multiple times.
"""

import asyncio
from typing import List

# Import wait_random from the previous file (0-basic_async.py)
wait_random = __import__('0-basic_async').wait_random


async def wait_n(n: int, max_delay: int) -> List[float]:
    """
    Spawn wait_random n times with the specified max_delay.
    Collects all delays and returns them in ascending order
    without using sort(), leveraging asyncio.as_completed.

    Args:
        n (int): Number of times to spawn wait_random.
        max_delay (int): Maximum delay for each wait_random.

    Returns:
        List[float]: List of delays in ascending order.
    """
    tasks = [asyncio.create_task(wait_random(max_delay)) for _ in range(n)]
    delays: List[float] = []
    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)
    return delays
