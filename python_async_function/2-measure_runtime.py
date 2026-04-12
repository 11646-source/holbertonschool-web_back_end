#!/usr/bin/env python3
import asyncio
import time
from concurrent_coroutines import wait_n   # updated import

def measure_time(n: int, max_delay: int) -> float:
    """
    Measure the average runtime of wait_n.
    """
    start_time = time.time()
    asyncio.run(wait_n(n, max_delay))
    end_time = time.time()
    total_time = end_time - start_time
    return total_time / n
