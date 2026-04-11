#!/usr/bin/env python3
"""
Module with async routines using wait_random.
"""

import asyncio
from typing import List
from previous_file import wait_random   # adjust import to your actual filename


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
    delays = []
    for completed in asyncio.as_completed(tasks):
        delay = await completed
        delays.append(delay)
    return delays
