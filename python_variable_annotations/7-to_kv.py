#!/usr/bin/env python3
"""Module for a tuple"""
from typing import Tuple


def to_kv(k: str, v: float) -> Tuple[str, float]:
    """
    Return a tuple with the string k and the square of v.

    Args:
        k (str): The key string.
        v (float): The value to square.

    Returns:
        Tuple[str, float]: A tuple containing k and v squared.
    """
    return (k, v ** 2)
